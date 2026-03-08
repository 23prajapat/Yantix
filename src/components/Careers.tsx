type CareerProps = {
    name: string;
};

export default function Careers({ name }: CareerProps) {

    return name === 'Open Roles' ? (
        <div className="px-6 py-12 text-gray-800">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
                No Open Roles Right Now
            </h2>
        </div>
    ) : null;
}