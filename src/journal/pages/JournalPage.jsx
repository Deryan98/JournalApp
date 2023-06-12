import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"

const drawerWidth = 240;

export const JournalPage = () => {
  return (
    <JournalLayout>
      <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, aperiam consequatur perspiciatis sed porro expedita modi reiciendis illo non sint culpa reprehenderit similique fuga odio, aliquid officiis saepe minima exercitationem!</Typography>
      <MailOutline />
    </JournalLayout>
  )
}
