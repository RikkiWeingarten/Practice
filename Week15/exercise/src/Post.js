import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Post = (props) => {
  const { title, body } = props.post;
  return (
    <div>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
        {body}
        </AccordionDetails>
      </Accordion>

    </div>
  );
};
export default Post;
