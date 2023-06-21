import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    }
}

export function generateMetadata({ params }: Props) {
    return {
        title: `제품 이름: ${params.slug}`,
        description: `${params.slug} 상품 페이지 입니다`,
    }
}

const products = ['shirt', 'pants', 'skirt', 'shoes']

export default function DetailPage({ params } : Props) {
    if (params.slug === 'nothing') {
        notFound();
    }
    return (
        <>
            <h1>{params.slug} 상품 페이지다!!</h1>
            <dl>
                {
                    products.map((prodcut, index) => (<li key={index}><Link href={`/products/${prodcut}`}>{prodcut}</Link></li>))
                }
            </dl>
        </>
    );
}

export function generateStaticParams() {
    const products = ['t-shirts', 'shoes'];
    return products.map(product => ({ // params에 들어가는 형태와 동일한 객체를 생성해준다.
        slug: product,
    }))
}