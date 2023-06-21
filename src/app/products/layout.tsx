import Link from 'next/link';
import products from './layout.module.css';

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav className={products.nav}>
                <Link href="/products/man">남자옷</Link>
                <Link href="/products/woman">여자옷</Link>
            </nav>
            <section className={products.section}>{children}</section>
        </>
    );
}