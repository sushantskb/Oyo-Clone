/* eslint-disable @next/next/no-img-element */
import SearchHeader from "@/components/SearchHeader";
const UserProfile = ({ userDetails }) => {
  console.log(userDetails);

  return (
    <>
      <SearchHeader />
      <div className="p-6 max-w-5xl mx-auto">
        {/* User Details */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <p className="text-lg font-medium mb-2">
              Name: {userDetails?.name}
            </p>
            <p className="text-lg font-medium">Email: {userDetails?.email}</p>
          </div>
          <div>
            <img src="/logo.png" alt="Image" className="w-32 h-32"/>
          </div>
        </div>

        {/* My Bookings */}
        <div>
          <h2 className="text-xl font-bold mb-4">My Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userDetails?.hotels?.map((booking) => (
              <div
                key={booking.id}
                className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={booking.hotel.banner}
                  alt={booking.hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    {booking.hotel.name}
                  </h3>
                  <p className="text-gray-600">Date: {booking.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  console.log("Context", context.query);

  const { id } = context.query;
  console.log("Id", id);

  try {
    const res = await fetch(`${process.env.API}/api/users/${id}`);

    const data = await res.json();

    return {
      props: {
        userDetails: data,
      },
    };
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return {
      props: {
        hotels: [],
      },
    };
  }
}
