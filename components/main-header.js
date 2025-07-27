import Link from "next/link";
import logoImg from '@/assets/logo.png'
import Image from "next/image";

export default function MainHeader(){


    return <header>
        <Link href='/'>
        <Image src={logoImg} alt="A plate with food on it"/>
        NextLevel Food
        </Link>

        <nav>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                 <li>
                    <Link href="/community">Foodies community</Link>
                </li>
            </ul>
        </nav>
    </header>
}