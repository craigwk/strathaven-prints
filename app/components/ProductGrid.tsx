"use client";

import { useEffect, useMemo, useState } from "react";

type ProductImage = {
    src: string;
    title: string;
    description: string;
    price: string;
};

type ProductCategory = {
    category: string;
    images: ProductImage[];
};

type ProductGridProps = {
    items: ProductCategory[];
};

type SelectedProduct = {
    categoryIndex: number;
    imageIndex: number;
};

export default function ProductGrid({ items }: ProductGridProps) {
    const [selected, setSelected] = useState<SelectedProduct | null>(null);

    const selectedData = useMemo(() => {
        if (!selected) return null;

        const category = items[selected.categoryIndex];
        if (!category) return null;

        const image = category.images[selected.imageIndex];
        if (!image) return null;

        return { category, image };
    }, [selected, items]);

    const closeModal = () => setSelected(null);

    const enquireAboutProduct = () => {
        if (!selectedData) return;

        const message = `I'd like to enquire about this product: ${selectedData.image.title} (${selectedData.category.category})${selectedData.image.price ? ` - ${selectedData.image.price}` : ""}.`;
        const subjectInput = document.querySelector('input[name="_subject"]') as HTMLInputElement | null;

        if (subjectInput) {
            subjectInput.value = `[Product] Quote request – ${selectedData.image.title} (${selectedData.category.category})`;
        }

        closeModal();

        const quoteSection = document.getElementById("quote");
        const descriptionBox = document.getElementById("job_description") as HTMLTextAreaElement | null;

        if (descriptionBox) {
            const existing = descriptionBox.value.trim();

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
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {items.map((category, categoryIndex) => (
                    <div
                        key={category.category}
                        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-blue-500/10"
                    >
                        <div className="p-5">
                            <div className="text-xs uppercase tracking-wide text-blue-300">
                                {category.category}
                            </div>
                        </div>

                        <div className="grid gap-6 px-5 pb-5">
                            {category.images.map((item, imageIndex) => (
                                <button
                                    key={item.src}
                                    type="button"
                                    onClick={() =>
                                        setSelected({
                                            categoryIndex,
                                            imageIndex,
                                        })
                                    }
                                    className="group/product overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 focus:outline-none"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover/product:scale-[1.05]"
                                        />

                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 transition duration-300 group-hover/product:opacity-100" />

                                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                            <span className="scale-95 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium text-white opacity-0 backdrop-blur-md transition duration-300 group-hover/product:scale-100 group-hover/product:opacity-100">
                                                View
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 transition duration-300 group-hover/product:bg-white/[0.02]">
                                        <p className="text-sm text-slate-300">
                                            Click an image to enlarge.
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {selected && selectedData && (
                <div
                    className="animate-fadeIn fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
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
                            aria-label="Previous product"
                        >
                            ←
                        </button>

                        <div className="mx-14 flex max-h-[90vh] w-full flex-col items-center">
                            <img
                                key={selectedData.image.src}
                                src={selectedData.image.src}
                                alt={selectedData.image.title}
                                className="animate-fadeIn max-h-[80vh] max-w-full rounded-2xl border border-white/10 object-contain shadow-2xl"
                            />

                            <div className="mt-4 text-center">
                                <div className="text-xs uppercase tracking-wide text-blue-300">
                                    {selectedData.category.category}
                                </div>


                                {selectedData.image.description && (
                                    <p className="mt-3 max-w-xl text-center text-sm text-slate-300">
                                        {selectedData.image.description}
                                    </p>
                                )}

                                {selectedData.image.price && (
                                    <div className="mt-3 text-sm font-medium text-blue-200">
                                        {selectedData.image.price}
                                    </div>
                                )}

                                <div className="mt-1 text-xs text-slate-400">
                                    {selected.imageIndex + 1} / {selectedData.category.images.length}
                                </div>

                                <button
                                    type="button"
                                    onClick={enquireAboutProduct}
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
                            aria-label="Next product"
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}