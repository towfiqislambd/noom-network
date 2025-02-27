import PropertyCard from "@/components/dashboardComponents/PropertyCard";
const propertyData = [
    {
        id: 1,
        thumbnail: 'https://i.ibb.co.com/zWsSyf2w/property.png',
        title: 'Bougrnville House park',
        desc: 'California 18645 Gale Avenue # 110',
    },
    {
        id: 2,
        thumbnail: 'https://i.ibb.co.com/zWsSyf2w/property.png',
        title: 'Bougrnville House park',
        desc: 'California 18645 Gale Avenue # 110',
    },
    {
        id: 3,
        thumbnail: 'https://i.ibb.co.com/zWsSyf2w/property.png',
        title: 'Bougrnville House park',
        desc: 'California 18645 Gale Avenue # 110',
    },
    {
        id: 4,
        thumbnail: 'https://i.ibb.co.com/zWsSyf2w/property.png',
        title: 'Bougrnville House park',
        desc: 'California 18645 Gale Avenue # 110',
    },
    {
        id: 5,
        thumbnail: 'https://i.ibb.co.com/zWsSyf2w/property.png',
        title: 'Bougrnville House park',
        desc: 'California 18645 Gale Avenue # 110',
    },
    {
        id: 6,
        thumbnail: 'https://i.ibb.co.com/zWsSyf2w/property.png',
        title: 'Bougrnville House park',
        desc: 'California 18645 Gale Avenue # 110',
    }
]

const MyProperty = () => {
    return (
        <div className="bg-white rounded-xl p-5 md:px-[30px] md:3xl:px-[100px] md:py-[30px] 3xl:py-[50px]">
            <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-8 text-headingTextColor">Property Listing</h3>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    propertyData.map(data => <PropertyCard key={data.id} data={data}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default MyProperty;