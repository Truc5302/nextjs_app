import Button from "@/components/ui/button";
import Link from "next/link";

export default function LoginLayot({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en">

            <ul className="flex">
                <li>
                    <Link href="/"><Button>Home</Button></Link>
                </li>
                <li>
                    <Link href="/register"><Button>Register</Button></Link>
                </li>
            </ul>

            {children}
        </div>
    );
}