import TopNav from "@/components/Nav/TopNav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
        <TopNav />
            {children}
        </>


    );
}
