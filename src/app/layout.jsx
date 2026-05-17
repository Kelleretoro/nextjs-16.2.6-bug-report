
import LayoutClient from "@/COMPonents/clientwrap";
import TestButton from "@/components/test";



export default function RootLayout({ children }) {
    return (
        <html>
            <body >
                <TestButton />
                {children}
            </body>
        </html>
    );
}