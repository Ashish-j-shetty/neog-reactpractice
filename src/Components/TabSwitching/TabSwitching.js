import React, { useState } from "react";

const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};

const Profile = () => {
  return <div>Profile</div>;
};

function TabSwitching() {
  const [tabs, setTabs] = useState({
    home: false,
    about: false,
    profile: false,
  });

  return (
    <div>
      {tabs.home && <Home />}

      {tabs.about && <About />}
      {tabs.profile && <Profile />}

      <button
        onClick={() =>
          setTabs((tabs) => ({
            ...tabs,
            home: true,
            about: false,
            profile: false,
          }))
        }
      >
        Home
      </button>
      <button
        onClick={() => {
          setTabs((tabs) => ({
            ...tabs,
            home: false,
            about: true,
            profile: false,
          }));
        }}
      >
        About
      </button>
      <button
        onClick={() =>
          setTabs((tabs) => ({
            ...tabs,
            home: false,
            about: false,
            profile: true,
          }))
        }
      >
        profile
      </button>
    </div>
  );
}

export default TabSwitching;
