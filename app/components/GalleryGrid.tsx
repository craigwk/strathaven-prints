"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryImage = {
    src: string;
    title: string;
};

type GalleryCategory = {
    category: string;
    images: GalleryImage[];
};

type GalleryGridProps = {
    items: GalleryCategory[];
};

type SelectedImage = {
    categoryIndex: number;
    imageIndex: number;
};

export default function GalleryGrid({ items }: GalleryGridProps) {
    const [selected, setSelected] = useState<SelectedImage | null>(null);

    const selectedData = useMemo(() => {
        if (!selected) return null;

        const category = items[selected.categoryIndex];
        if (!category) return null;

        const image = category.images[selected.imageIndex];
        if (!image) return null;

        return { category, image };
    }, [selected, items]);

    const closeModal = () => setSelected(null);

    const enquireAboutImage = () => {
        if (!selectedData) return;

        const formattedTitle = selectedData.image.title
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");

        const message = `I’d like to enquire about this example: ${formattedTitle} (${selectedData.category.category}).`;

        closeModal();

        const quoteSection = document.getElementById("quote");
        const descriptionBox = document.getElementById("job_description") as HTMLTextAreaElement | null;

        if (descriptionBox) {
            const existing = descriptionBox.value;

            descriptionBox.value = existing
                ? `${message}\n\n${existing}`
                : message;

            descriptionBox.focus();

            const end = descriptionBox.value.length;
            descriptionBox.setSelectionRange(end, end);
        }

        if (quoteSection) {
            quoteSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const showPrev = () => {
        if (!selected) return;

        const category = items[selected.categoryIndex];
        if (!category) return;

        const prevIndex =
            selected.imageIndex === 0
                ? category.images.length - 1
                : selected.imageIndex - 1;

        setSelected({
            categoryIndex: selected.categoryIndex,
            imageIndex: prevIndex,
        });
    };

    const showNext = () => {
        if (!selected) return;

        const category = items[selected.categoryIndex];
        if (!category) return;

        const nextIndex =
            selected.imageIndex === category.images.length - 1
                ? 0
                : selected.imageIndex + 1;

        setSelected({
            categoryIndex: selected.categoryIndex,
            imageIndex: nextIndex,
        });
    };

    useEffect(() => {
        if (!selected) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selected]);

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((category, categoryIndex) => (
                    <div
                        key={category.category}
                        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md"
                    >
                        <div className="flex overflow-x-auto gap-2 p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {category.images.map((img, imageIndex) => (
                                <button
                                    key={img.src}
                                    type="button"
                                    onClick={() =>
                                        setSelected({
                                            categoryIndex,
                                            imageIndex,
                                        })
                                    }
                                    className="flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="h-40 w-60 object-cover transition hover:opacity-90"
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="p-5">
                            <div className="mb-1 text-xs uppercase tracking-wide text-blue-300">
                                {category.category}
                            </div>
                            <p className="text-sm text-slate-300">
                                Click an image to enlarge.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {selected && selectedData && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm animate-fadeIn"
                    onClick={closeModal}
                >
                    <div
                        className="relative flex max-h-[90vh] w-full max-w-6xl items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-3 top-3 z-20 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-md hover:bg-white/20"
                        >
                            ✕
                        </button>

                        <button
                            type="button"
                            onClick={showPrev}
                            className="absolute left-2 z-20 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-md hover:bg-white/20"
                            aria-label="Previous image"
                        >
                            ←
                        </button>

                        <div className="mx-14 flex max-h-[90vh] w-full flex-col items-center">
                            <img
                                key={selectedData.image.src}
                                src={selectedData.image.src}
                                alt={selectedData.image.title}
                                className="max-h-[80vh] max-w-full rounded-2xl border border-white/10 object-contain shadow-2xl animate-fadeIn"
                            />

                            <div className="mt-4 text-center">
                                <div className="text-xs uppercase tracking-wide text-blue-300">
                                    {selectedData.category.category}
                                </div>

                                <div className="mt-1 text-sm text-slate-200">
                                    {selectedData.image.title
                                        .split("-")
                                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                                        .join(" ")}
                                </div>

                                <div className="mt-1 text-xs text-slate-400">
                                    {selected.imageIndex + 1} / {selectedData.category.images.length}
                                </div>

                                <button
                                    type="button"
                                    onClick={enquireAboutImage}
                                    className="mt-4 rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm transition hover:bg-blue-500/20"
                                >
                                    Enquire about this
                                </button>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={showNext}
                            className="absolute right-2 z-20 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-md hover:bg-white/20"
                            aria-label="Next image"
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}