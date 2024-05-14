import TopNav from "@/components/Nav/TopNav";
import { AuthProvider } from "@/providers/AuthProvider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <AuthProvider>
                <TopNav />
                {children}
            </AuthProvider>
        </>


    );
}
