import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
    return (
        <div class="grid auto-rows-min lg:grid-cols-[100px_1fr_1fr] h-screen">
            <nav class="p-4">
                <ul>
                    <li><a href="/" class="underline">Home</a></li>
                </ul>
            </nav>
            <aside class="hidden lg:block">
                Image
            </aside>
            <main class="container mx-auto max-w-screen-sm p-4">
            <Component />
            </main>
        </div>
    );
}