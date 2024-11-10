
interface TextSlabProps {
    title: string;
    content: string;
    titleClassName: string;
    contentClassName: string;
}

export default function TextSlab({ title, content, titleClassName, contentClassName }: TextSlabProps) {
    return (
        <div className="flex-col p-4">
            <div className={titleClassName}>{title}</div>
            <div className={contentClassName}>{content}</div>
        </div>
    );
}
