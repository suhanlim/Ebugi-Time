import Image from "next/image";
export default function CommunityTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="mask mask-squircle flex h-12 w-12 bg-indigo-500">
                  <Image
                    className="object-contain p-1"
                    src="/assets/logo.png"
                    alt="User Profile"
                    height={90}
                    width={64}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
}
