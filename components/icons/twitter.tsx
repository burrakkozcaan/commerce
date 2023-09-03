import clsx from "clsx";


export default function Twitter(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label={`${process.env.SITE_NAME} logo`}
            {...props}
            fill="none"
            width="24" height="24" viewBox="0 0 498 498"
            className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}

        >

            <path d="M358.549 121.5L272.894 219.368L266.191 227.026L272.331 235.141L379.27 376.5H314.98L243.933 283.511L234.657 271.371L224.595 282.867L142.63 376.5H128.341L221.209 270.33L227.943 262.631L221.729 254.506L119.998 121.5H186.482L250.431 206.041L259.702 218.297L269.813 206.725L344.277 121.5H358.549ZM348.3 373.1H373.422L358.271 353.061L188.371 128.361L184.62 123.4H178.4H150.1H124.808L140.17 143.492L311.97 368.192L315.722 373.1H321.9H348.2H348.3ZM89 12.5C46.7964 12.5 12.5 46.7964 12.5 89V409C12.5 451.204 46.7964 485.5 89 485.5H409C451.204 485.5 485.5 451.204 485.5 409V89C485.5 46.7964 451.204 12.5 409 12.5H89Z" fill="white" stroke="black" stroke-width="25"/>
        </svg>

    );
}
