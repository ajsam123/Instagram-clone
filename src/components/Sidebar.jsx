import React from "react";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div className="px-6 py-10">
      <figure>
        <img src="/images/logo.svg" alt="" />
      </figure>
      <div className="pt-10 ">
        <ul className="flex flex-col gap-10">
          <Navigation src="/images/home.svg" nav="Home" />
          <Navigation src="/images/search.svg" nav="Search" />
          <Navigation src="/images/explore.svg" nav="Explore" />
          <Navigation src="/images/reels.svg" nav="Reels" />
          <Navigation src="/images/messages.svg" nav="Messages" />
          <Navigation src="/images/notifications.svg" nav="Notifications" />
          <Navigation src="/images/create.svg" nav="Create" />
          <Navigation src="/images/profile.svg" nav="Profile" />
          <Navigation src="/images/more.svg" nav="More" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
