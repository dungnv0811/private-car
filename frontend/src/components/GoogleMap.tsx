export function GoogleMap({ data }) {
    if (!data) return null;
    console.log(data)
    return (
        <div className="google-map-container container flex flex-col items-center justify-between py-5 sm:flex-row ">
            <iframe
                title={data.title}
                src={data.src}
                width={data.width}
                height={data.height}
                style={{ border: 0 }}
                allowFullScreen=""
                loading={data.loading}
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default GoogleMap;
