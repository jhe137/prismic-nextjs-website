import clsx from "clsx"
type BoundedProps ={
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}
export default function Bounded({
    as: Comp ="section",
    className,
    children,
    ...restProps
}:BoundedProps){

    return(<Comp className={clsx("px-4 py-10 md:py-10 md:px-6 lg:py-10" )}{...restProps}>
        <div className="mx-auto w-full max-w-6xl">
            {children}
            </div>
    </Comp>)
}