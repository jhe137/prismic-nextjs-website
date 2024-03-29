import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";

export default async function Footer(){
    const client = createClient();
    const settings = await client.getSingle("settings");

    return(
        <Bounded as="footer">
            <div className="flex sm:flex-row flex-col justify-between items-center  gap-6">
            {/* <Link href="/">{settings.data.site_title}</Link> */}
        <p className="text-sm">
            ©{new Date().getFullYear()} Built by <Link href="hejason.com" className= "font-medium underline underline-offset-4">Jason He</Link>. Source code is available on <Link href="https://github.com/jhe137/prismic-hejason-website" className= "font-medium underline underline-offset-4">GitHub</Link> 
        </p>
        <ul className="flex">
        {settings.data.navigation.map(({link,label})=> 
        (<li key={label}>
            <PrismicNextLink field={link} className="p-3">{label}</PrismicNextLink>
    
        </li>
    
        ))}    
        </ul>
        </div>
        </Bounded>
    );
}