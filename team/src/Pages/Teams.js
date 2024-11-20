import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import TeamCard from "../components/TeamCard";
import TeamModal from "../components/TeamModal";

const Teams = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const [activeTeams, setActiveTeams] = useState([
    {
      name: "Development Team",
      description: "Handles all software development",
      members: ["Alice", "Bob", "Charlie"],
    },
    {
      name: "Marketing Team",
      description: "Focuses on marketing strategies",
      members: ["Eve", "Mallory"],
    },
  ]);
  const [inactiveTeams] = useState([]);

  const handleTabChange = (event, newValue) => setTabValue(newValue);
  const handleAddTeam = (newTeam) => {
    setActiveTeams((prevTeams) => [...prevTeams, newTeam]);
    setOpenModal(false);
  };

  return (
    <div style={{ marginLeft: "260px", padding: "20px" }}>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Active" />
        <Tab label="Inactive" />
      </Tabs>
      <Box>
        {tabValue === 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {activeTeams.map((team, index) => (
              <TeamCard
                key={index}
                name={team.name}
                description={team.description}
                members={team.members}
              />
            ))}
            <div
              onClick={() => setOpenModal(true)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px dashed #ccc",
                borderRadius: "8px",
                cursor: "pointer",
                height: "200px",
              }}
            >
              + Create New Team
            </div>
          </div>
        )}
        {tabValue === 1 && (
          <div style={{ marginTop: "20px" }}>
            {inactiveTeams.length > 0 ? (
              inactiveTeams.map((team, index) => (
                <TeamCard
                  key={index}
                  name={team.name}
                  description={team.description}
                  members={team.members}
                />
              ))
            ) : (
              <div>No inactive teams available.</div>
            )}
          </div>
        )}
      </Box>
      <TeamModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleAddTeam}
      />
    </div>
  );
};

export default Teams;




// import { useState } from 'react';
// import { Tabs, Tab, Box } from '@mui/material';
// import TeamCard from '../components/TeamCard';
// import TeamModal from '../components/TeamModal';

// const Teams = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [openModal, setOpenModal] = useState(false);

//   // State to store active and inactive teams
//   const [activeTeams, setActiveTeams] = useState([
//     {
//       name: "Development Team",
//       description: "Handles all software development",
//       members: ["Alice", "Bob", "Charlie"],
//     },
//     {
//       name: "Marketing Team",
//       description: "Focuses on marketing strategies",
//       members: ["Eve", "Mallory"],
//     },
//   ]);
//   const [inactiveTeams] = useState([]); // Currently empty

//   const handleTabChange = (event, newValue) => setTabValue(newValue);

//   // Handle new team addition
//   const handleAddTeam = (newTeam) => {
//     setActiveTeams((prevTeams) => [...prevTeams, newTeam]);
//     setOpenModal(false); // Close modal after adding
//   };

//   return (
//     <div className="p-4">
//       <Tabs value={tabValue} onChange={handleTabChange}>
//         <Tab label={`Active`} />
//         <Tab label={`Inactive`} />
//       </Tabs>
//       <Box>
//         {tabValue === 0 && (
//           <div className="grid grid-cols-4 gap-4 mt-4">
//             {activeTeams.map((team, index) => (
//               <TeamCard
//                 key={index}
//                 name={team.name}
//                 description={team.description}
//                 members={team.members}
//               />
//             ))}
//             <div
//               onClick={() => setOpenModal(true)}
//               className="flex justify-center items-center border-dashed border-2 border-gray-400 rounded-lg cursor-pointer h-32"
//             >
//               + Create New Team
//             </div>
//           </div>
//         )}
//         {tabValue === 1 && (
//           <div className="mt-4">
//             {inactiveTeams.length > 0 ? (
//               inactiveTeams.map((team, index) => (
//                 <TeamCard
//                   key={index}
//                   name={team.name}
//                   description={team.description}
//                   members={team.members}
//                 />
//               ))
//             ) : (
//               <div>No inactive teams available.</div>
//             )}
//           </div>
//         )}
//       </Box>
//       <TeamModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         onSave={handleAddTeam}
//       />
//     </div>
//   );
// };

// export default Teams;


// import { useState } from 'react';
// import { Tabs, Tab, Box } from '@mui/material';
// import TeamCard from '../components/TeamCard';
// import TeamModal from '../components/TeamModal';

// const Teams = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [openModal, setOpenModal] = useState(false);

//   // Example data for active teams
//   const activeTeams = [
//     {
//       name: "Development Team",
//       description: "Handles all software development",
//       members: ["Alice", "Bob", "Charlie"],
//     },
//     {
//       name: "Marketing Team",
//       description: "Focuses on marketing strategies",
//       members: ["Eve", "Mallory"],
//     },
//   ];

//   const inactiveTeams = []; // Add data for inactive teams if available

//   const handleTabChange = (event, newValue) => setTabValue(newValue);

//   return (
//     <div className="p-4">
//       <Tabs value={tabValue} onChange={handleTabChange}>
//         <Tab label={`Active`} />
//         <Tab label={`Inactive`} />
//       </Tabs>
//       <Box>
//         {tabValue === 0 && (
//           <div className="grid grid-cols-4 gap-4">
//             {activeTeams.map((team, index) => (
//               <TeamCard
//                 key={index}
//                 name={team.name}
//                 description={team.description}
//                 members={team.members}
//               />
//             ))}
//             <div
//               onClick={() => setOpenModal(true)}
//               className="flex justify-center items-center border-dashed border-2 border-gray-400 rounded-lg cursor-pointer h-32"
//             >
//               + Create New Team
//             </div>
//           </div>
//         )}
//         {tabValue === 1 && (
//           <div>
//             {inactiveTeams.length > 0 ? (
//               inactiveTeams.map((team, index) => (
//                 <TeamCard
//                   key={index}
//                   name={team.name}
//                   description={team.description}
//                   members={team.members}
//                 />
//               ))
//             ) : (
//               <div>No inactive teams available.</div>
//             )}
//           </div>
//         )}
//       </Box>
//       <TeamModal open={openModal} onClose={() => setOpenModal(false)} />
//     </div>
//   );
// };

// export default Teams;










// // import { useState } from 'react';
// // import { Tabs, Tab, Box } from '@mui/material';
// // import TeamCard from '../components/TeamCard';
// // import TeamModal from '../components/TeamModal';

// // const Teams = () => {
// //   const [tabValue, setTabValue] = useState(0);
// //   const [openModal, setOpenModal] = useState(false);
// //   const handleTabChange = (event, newValue) => setTabValue(newValue);

// //   return (
// //     <div className="p-4">
// //       <Tabs value={tabValue} onChange={handleTabChange}>
// //         <Tab label={`Active`} />
// //         <Tab label={`Inactive`} />
// //       </Tabs>
// //       <Box>
// //         {tabValue === 0 && (
// //           <div className="grid grid-cols-4 gap-4">
// //             <TeamCard />
// //             <div
// //               onClick={() => setOpenModal(true)}
// //               className="flex justify-center items-center border-dashed border-2 border-gray-400 rounded-lg cursor-pointer h-32"
// //             >
// //               + Create New Team
// //             </div>
// //           </div>
// //         )}
// //         {tabValue === 1 && <div>No inactive teams available.</div>}
// //       </Box>
// //       <TeamModal open={openModal} onClose={() => setOpenModal(false)} />
// //     </div>
// //   );
// // };

// // export default Teams;
