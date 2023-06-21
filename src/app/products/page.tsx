import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '멋진 상품 페이지',
  description: '멋진 제품 페이지입니다.'
}

export default function ProductsPage() {
    return <h1>상품 페이지다!!</h1>
}