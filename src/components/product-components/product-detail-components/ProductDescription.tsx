import ReactMarkdown from 'react-markdown';

function ProductDescription({ description }) {
    return (
        <div className="p-4 bg-white overflow-hidden rounded-2xl">
            <ReactMarkdown>{description}</ReactMarkdown>
        </div>
    );
}
export default ProductDescription;
