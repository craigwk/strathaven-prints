"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xbdpezrk", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                form.reset();
                setIsSuccess(true);
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }
        } catch {
            setErrorMessage("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <form
                id="quote-form"
                onSubmit={handleSubmit}
                className="mt-8 grid gap-4"
            >
                <input type="hidden" name="form_type" value="quote_request" />
                <input type="hidden" name="_subject" value="New quote request – Strathaven Prints" />
                <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                />

                <input
                    name="name"
                    placeholder="Name"
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 transition duration-200 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-fuchsia-400/40 focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10"
                />

                <input
                    name="_replyto"
                    placeholder="Email or phone"
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 transition duration-200 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-fuchsia-400/40 focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10"
                />

                <textarea
                    id="job_description"
                    name="job_description"
                    placeholder="What do you need? Even a rough idea is fine — you can send photos after."
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 transition duration-200 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-fuchsia-400/40 focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                    <select
                        name="material"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 transition duration-200 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-fuchsia-400/40 focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10"
                    >
                        <option className="bg-slate-900 text-white">Material (if known)</option>
                        <option className="bg-slate-900 text-white">PLA</option>
                        <option className="bg-slate-900 text-white">PETG</option>
                        <option className="bg-slate-900 text-white">TPU</option>
                        <option className="bg-slate-900 text-white">Not sure</option>
                    </select>

                    <input
                        name="size"
                        placeholder="Approx size (e.g. 10cm x 5cm)"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 transition duration-200 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-fuchsia-400/40 focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10"
                    />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <input
                        name="quantity"
                        placeholder="Quantity"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 transition duration-200 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-fuchsia-400/40 focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10"
                    />
                    <input
                        name="deadline"
                        placeholder="When do you need it?"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 transition duration-200 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-fuchsia-400/40 focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10"
                    />
                </div>

                <textarea
                    name="extra_notes"
                    placeholder="Anything else (colour, strength, finish, etc.)"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 transition duration-200 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-fuchsia-400/40 focus:bg-gradient-to-r focus:from-blue-500/10 focus:via-purple-500/10 focus:to-pink-500/10"
                />

                <div className="mt-4 flex gap-3">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 cursor-pointer rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 px-6 py-3 font-medium text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Sending..." : "Get my quote"}
                    </button>

                    <button
                        type="reset"
                        disabled={isSubmitting}
                        className="cursor-pointer rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        Clear
                    </button>
                </div>
                <p className="mt-3 text-xs text-slate-400">
                    No obligation — I’ll reply with price and options before anything is made.
                </p>
            </form>

            {isSuccess && (
                <div className="mt-4 rounded-2xl border border-green-400/20 bg-green-500/10 p-4 text-sm text-green-100">
                    <p>
                        Thanks — your request has been sent. We’ll get back to you as soon as possible.
                    </p>

                    <p className="mt-3 text-green-100/80">
                        If your enquiry is urgent, messaging via Facebook or WhatsApp is usually quickest.
                    </p>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://m.me/61572099393762"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 flex-1 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 font-medium text-blue-100 transition hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M12 2C6.48 2 2 6.02 2 10.94c0 2.8 1.45 5.3 3.72 6.94V22l3.52-1.94c.94.26 1.94.4 3 .4 5.52 0 10-4.02 10-8.94S17.52 2 12 2zm1.06 12.34l-2.54-2.7-4.7 2.7 5.18-5.5 2.6 2.7 4.64-2.7-5.18 5.5z" />
                            </svg>
                            Message on Facebook
                        </a>

                        <a
                            href="https://wa.me/447368607524"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 flex-1 rounded-2xl border border-green-400/30 bg-green-500/10 px-5 py-3 font-medium text-green-100 transition hover:bg-green-600 hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M16.01 3C9.38 3 4 8.37 4 15c0 2.64.86 5.08 2.32 7.06L4 29l7.13-2.28A11.94 11.94 0 0016.01 27C22.64 27 28 21.63 28 15S22.64 3 16.01 3zm6.47 17.06c-.27.76-1.57 1.45-2.16 1.54-.55.08-1.25.12-2.02-.12-.47-.15-1.08-.35-1.86-.68-3.27-1.41-5.4-4.7-5.56-4.92-.15-.21-1.32-1.76-1.32-3.35 0-1.6.84-2.38 1.14-2.71.3-.33.65-.41.87-.41.22 0 .44 0 .63.01.2.01.46-.07.72.55.27.66.91 2.28.99 2.45.08.16.13.35.02.56-.1.21-.15.35-.3.53-.15.18-.31.4-.44.53-.15.15-.31.31-.13.61.18.3.8 1.32 1.72 2.13 1.18 1.05 2.17 1.38 2.47 1.53.3.15.47.13.65-.08.18-.21.76-.88.96-1.18.2-.3.41-.25.69-.15.27.1 1.73.82 2.02.97.3.15.5.22.57.34.07.12.07.7-.2 1.46z" />
                            </svg>
                            Message on WhatsApp
                        </a>
                    </div>
                </div>
            )}

            {errorMessage && (
                <div className="mt-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {errorMessage}
                </div>
            )}
        </>
    );
}