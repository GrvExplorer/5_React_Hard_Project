import { useNavigate } from "react-router-dom";
import { NavigationItems } from "../utils/constants";
function Navigation() {

  const navigate = useNavigate()

  return (
    <div className="flex w-full justify-center py-4">
      <div className="flex gap-8">
        {NavigationItems.map((item) => (
          <div onClick={() => navigate(item.link)
          }
            key={`${item.name}-${item.icon}`}
            className="flex cursor-pointer gap-1 border-blue-400 pb-1 text-xl font-semibold text-black hover:border-b-4"
          >
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
