import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove"; // Importing remove icon

const TeamModal = ({ open, onClose, onSave }) => {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [memberName, setMemberName] = useState("");
  const [profile, setProfile] = useState("");
  const [project, setProject] = useState("");
  const [members, setMembers] = useState([]);

  const handleAddMember = () => {
    if (memberName.trim() && profile.trim() && project.trim()) {
      setMembers((prevMembers) => [
        ...prevMembers,
        {
          name: memberName.trim(),
          profile: profile.trim(),
          project: project.trim(),
        },
      ]);
      setMemberName("");
      setProfile("");
      setProject("");
    }
  };

  const handleRemoveMember = (index) => {
    setMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
  };

  const handleDeleteAll = () => {
    setMembers([]);
  };

  const handleSave = () => {
    if (teamName && description) {
      onSave({ name: teamName, description, members });
      setTeamName("");
      setDescription("");
      setMembers([]);
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          boxShadow: 24,
          borderRadius: "8px",
          padding: "24px",
          width: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "16px" }}
        >
          Create New Team
        </Typography>

        {/* Team Details */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box>
            <Typography variant="body1" sx={{ marginBottom: "4px" }}>
              Team Name
            </Typography>
            <TextField
              label="Enter team name"
              variant="outlined"
              fullWidth
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </Box>
          <Box>
            <Typography variant="body1" sx={{ marginBottom: "4px" }}>
              Description
            </Typography>
            <TextField
              label="Enter description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
        </Box>

        {/* Add Members Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <TextField
              label="Name"
              variant="outlined"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              sx={{ flex: 1 }}
            />
            <TextField
              label="Profile"
              variant="outlined"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              sx={{ flex: 1 }}
            />
            <TextField
              label="Project"
              variant="outlined"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              sx={{ flex: 1 }}
            />
            <IconButton
              onClick={handleAddMember}
              sx={{
                backgroundColor: "#1976d2",
                color: "white",
                "&:hover": { backgroundColor: "#115293" },
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>

          {/* Team Members List with Remove Option */}
          {members.length > 0 && (
            <>
              <Typography
                variant="h6"
                sx={{ marginTop: "16px", fontWeight: "bold" }}
              >
                Team Members
              </Typography>
              <List
                sx={{
                  maxHeight: "150px",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                {members.map((member, index) => (
                  <ListItem
                    key={index}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ListItemText
                      primary={member.name}
                      secondary={`Profile: ${member.profile} | Project: ${member.project}`}
                    />
                    <IconButton
                      onClick={() => handleRemoveMember(index)}
                      sx={{
                        color: "#d32f2f",
                        "&:hover": { backgroundColor: "#f44336" },
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteAll}
                sx={{ marginTop: "8px", alignSelf: "flex-start" }}
              >
                Delete All Members
              </Button>
            </>
          )}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#115293" },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TeamModal;

// import { useState } from "react";
// import {
//   Modal,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// const TeamModal = ({ open, onClose, onSave }) => {
//   const [teamName, setTeamName] = useState("");
//   const [description, setDescription] = useState("");
//   const [memberName, setMemberName] = useState("");
//   const [profile, setProfile] = useState("");
//   const [project, setProject] = useState("");
//   const [members, setMembers] = useState([]);

//   const handleAddMember = () => {
//     if (memberName.trim() && profile.trim() && project.trim()) {
//       setMembers((prevMembers) => [
//         ...prevMembers,
//         { name: memberName.trim(), profile: profile.trim(), project: project.trim() },
//       ]);
//       setMemberName("");
//       setProfile("");
//       setProject("");
//     }
//   };

//   const handleSave = () => {
//     if (teamName && description) {
//       onSave({ name: teamName, description, members });
//       setTeamName("");
//       setDescription("");
//       setMembers([]);
//     }
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           backgroundColor: "white",
//           boxShadow: 24,
//           borderRadius: "8px",
//           padding: "24px",
//           width: "600px", // Adjusted width
//           display: "flex",
//           flexDirection: "column",
//           gap: "16px",
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
//           Create New Team
//         </Typography>
//         {/* Left Section: Team Details */}
//         <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//           <Box>
//             <Typography variant="body1" sx={{ marginBottom: "4px" }}>
//               Team Name
//             </Typography>
//             <TextField
//               label="Enter team name"
//               variant="outlined"
//               fullWidth
//               value={teamName}
//               onChange={(e) => setTeamName(e.target.value)}
//             />
//           </Box>
//           <Box>
//             <Typography variant="body1" sx={{ marginBottom: "4px" }}>
//               Description
//             </Typography>
//             <TextField
//               label="Enter description"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={3}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </Box>
//         </Box>
//         {/* Right Section: Add Members */}
//         <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//           <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <TextField
//               label="Name"
//               variant="outlined"
//               value={memberName}
//               onChange={(e) => setMemberName(e.target.value)}
//               sx={{ flex: 1 }}
//             />
//             <TextField
//               label="Profile"
//               variant="outlined"
//               value={profile}
//               onChange={(e) => setProfile(e.target.value)}
//               sx={{ flex: 1 }}
//             />
//             <TextField
//               label="Project"
//               variant="outlined"
//               value={project}
//               onChange={(e) => setProject(e.target.value)}
//               sx={{ flex: 1 }}
//             />
//             <IconButton
//               onClick={handleAddMember}
//               sx={{
//                 backgroundColor: "#1976d2",
//                 color: "white",
//                 "&:hover": { backgroundColor: "#115293" },
//               }}
//             >
//               <AddIcon />
//             </IconButton>
//           </Box>
//           {members.length > 0 && (
//             <List
//               sx={{
//                 maxHeight: "150px",
//                 overflowY: "auto",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             >
//               {members.map((member, index) => (
//                 <ListItem key={index}>
//                   <ListItemText
//                     primary={member.name}
//                     secondary={`Profile: ${member.profile} | Project: ${member.project}`}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           )}
//         </Box>
//         {/* Footer: Action Buttons */}
//         <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
//           <Button variant="outlined" color="secondary" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSave}
//             sx={{
//               backgroundColor: "#1976d2",
//               "&:hover": { backgroundColor: "#115293" },
//             }}
//           >
//             Save
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default TeamModal;

// import { useState } from "react";
// import {
//   Modal,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// const TeamModal = ({ open, onClose, onSave }) => {
//   const [teamName, setTeamName] = useState("");
//   const [description, setDescription] = useState("");
//   const [memberName, setMemberName] = useState("");
//   const [members, setMembers] = useState([]);

//   const handleAddMember = () => {
//     if (memberName.trim()) {
//       setMembers((prevMembers) => [...prevMembers, memberName.trim()]);
//       setMemberName("");
//     }
//   };

//   const handleSave = () => {
//     if (teamName && description) {
//       onSave({ name: teamName, description, members });
//       setTeamName("");
//       setDescription("");
//       setMembers([]);
//     }
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           backgroundColor: "white",
//           boxShadow: 24,
//           borderRadius: "8px",
//           padding: "24px",
//           width: "600px", // Adjusted width for better alignment
//           display: "flex",
//           flexDirection: "column",
//           gap: "16px",
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           Create New Team
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             gap: "16px",
//             alignItems: "flex-start", // Align fields to the top
//           }}
//         >
//           {/* Left Section: Team Name and Description */}
//           <Box sx={{ flex: 2 }}>
//             <TextField
//               label="Team Name"
//               variant="outlined"
//               fullWidth
//               sx={{ marginBottom: "16px" }}
//               value={teamName}
//               onChange={(e) => setTeamName(e.target.value)}
//             />
//             <TextField
//               label="Description"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={3}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </Box>

//           {/* Right Section: Add Members */}
//           <Box sx={{ flex: 1 }}>
//             <TextField
//               label="Add Member"
//               variant="outlined"
//               fullWidth
//               value={memberName}
//               onChange={(e) => setMemberName(e.target.value)}
//             />
//             <IconButton
//               onClick={handleAddMember}
//               sx={{
//                 marginTop: "8px",
//                 backgroundColor: "#1976d2",
//                 color: "white",
//                 "&:hover": { backgroundColor: "#115293" },
//               }}
//             >
//               <AddIcon />
//             </IconButton>
//             {members.length > 0 && (
//               <List
//                 sx={{
//                   marginTop: "16px",
//                   maxHeight: "100px",
//                   overflowY: "auto",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               >
//                 {members.map((member, index) => (
//                   <ListItem key={index}>
//                     <ListItemText primary={member} />
//                   </ListItem>
//                 ))}
//               </List>
//             )}
//           </Box>
//         </Box>
//         <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
//           <Button variant="outlined" color="secondary" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSave}
//             sx={{
//               backgroundColor: "#1976d2",
//               "&:hover": { backgroundColor: "#115293" },
//             }}
//           >
//             Save
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default TeamModal;

// import { useState } from "react";
// import {
//   Modal,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// const TeamModal = ({ open, onClose, onSave }) => {
//   const [teamName, setTeamName] = useState("");
//   const [description, setDescription] = useState("");
//   const [memberName, setMemberName] = useState("");
//   const [members, setMembers] = useState([]);

//   const handleAddMember = () => {
//     if (memberName.trim()) {
//       setMembers((prevMembers) => [...prevMembers, memberName.trim()]);
//       setMemberName("");
//     }
//   };

//   const handleSave = () => {
//     if (teamName && description) {
//       onSave({ name: teamName, description, members });
//       setTeamName("");
//       setDescription("");
//       setMembers([]);
//     }
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           backgroundColor: "white",
//           boxShadow: 54,
//           borderRadius: "8px",
//           padding: "94px",
//           width: "500px", // Fixed width
//         }}
//       >
//         <Typography variant="h6" className="mb-6 " sx={{ fontWeight: "bold" }}>
//           Create New Team
//         </Typography>
//         <TextField
//           label="Team Name"
//           variant="outlined"
//           fullWidth
//           sx={{ marginBottom: "16px" }}
//           value={teamName}
//           onChange={(e) => setTeamName(e.target.value)}
//         />
//         <TextField
//           label="Description"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={3}
//           sx={{ marginBottom: "16px" }}
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <div className="flex items-center mb-4">
//           <TextField
//             label="Add Member"
//             variant="outlined"
//             fullWidth
//             value={memberName}
//             onChange={(e) => setMemberName(e.target.value)}
//           />
//           <IconButton
//             onClick={handleAddMember}
//             sx={{
//               marginLeft: "8px",
//               backgroundColor: "#1976d2",
//               color: "white",
//               "&:hover": { backgroundColor: "#115293" },
//             }}
//           >
//             <AddIcon />
//           </IconButton>
//         </div>
//         {members.length > 0 && (
//           <List
//             sx={{
//               maxHeight: "100px",
//               overflowY: "auto",
//               marginBottom: "16px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           >
//             {members.map((member, index) => (
//               <ListItem key={index}>
//                 <ListItemText primary={member} />
//               </ListItem>
//             ))}
//           </List>
//         )}
//         <div className="flex justify-end mt-4">
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={onClose}
//             sx={{ marginRight: "8px" }}
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSave}
//             sx={{
//               backgroundColor: "#1976d2",
//               "&:hover": { backgroundColor: "#115293" },
//             }}
//           >
//             Save
//           </Button>
//         </div>
//       </Box>
//     </Modal>
//   );
// };

// export default TeamModal;

// import { Dialog, DialogContent, TextField, Button } from '@mui/material';
// import { useState } from 'react';

// const TeamModal = ({ open, onClose }) => {
//   const [teamName, setTeamName] = useState('');
//   const [description, setDescription] = useState('');
//   const [members, setMembers] = useState([]);

//   const addMember = () => setMembers([...members, { name: '', profile: '' }]);
//   const saveTeam = () => {
//     // Save team logic
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogContent>
//         <TextField
//           label="Team Name"
//           fullWidth
//           value={teamName}
//           onChange={(e) => setTeamName(e.target.value)}
//         />
//         <TextField
//           label="Description"
//           fullWidth
//           multiline
//           rows={4}
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         {members.map((member, index) => (
//           <div key={index}>
//             <TextField
//               label="Member Name"
//               fullWidth
//               value={member.name}
//               onChange={(e) => {
//                 const newMembers = [...members];
//                 newMembers[index].name = e.target.value;
//                 setMembers(newMembers);
//               }}
//             />
//             <TextField
//               label="Member Profile"
//               fullWidth
//               value={member.profile}
//               onChange={(e) => {
//                 const newMembers = [...members];
//                 newMembers[index].profile = e.target.value;
//                 setMembers(newMembers);
//               }}
//             />
//           </div>
//         ))}
//         <Button onClick={addMember}>+ Add Member</Button>
//         <div className="flex justify-end mt-4">
//           <Button onClick={onClose}>Cancel</Button>
//           <Button onClick={saveTeam}>Save</Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default TeamModal;
