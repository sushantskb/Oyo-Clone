/* eslint-disable @next/next/no-img-element */
import SearchHeader from "@/components/SearchHeader";
const user = {
  name: "John Doe",
  email: "johndoe@example.com",
  bookings: [
    {
      id: 1,
      hotelName: "Grand Palace Hotel",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      date: "2025-01-28",
    },
    {
      id: 2,
      hotelName: "Ocean View Resort",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      date: "2025-02-15",
    },
  ],
};
const UserProfile = () => {
  return (
    <>
      <SearchHeader />
      <div className="p-6 max-w-5xl mx-auto">
        {/* User Details */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">User Profile</h1>
          <p className="text-lg font-medium mb-2">Name: {user.name}</p>
          <p className="text-lg font-medium">Email: {user.email}</p>
        </div>

        {/* My Bookings */}
        <div>
          <h2 className="text-xl font-bold mb-4">My Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={booking.image}
                  alt={booking.hotelName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    {booking.hotelName}
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
