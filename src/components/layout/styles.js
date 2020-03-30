
import { makeStyles } from '@material-ui/core/styles';


export const createStyles = () => {
  
  const createSideBarStyles = (theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    }
  });

  const classes = makeStyles(createSideBarStyles)();
  return classes;
};