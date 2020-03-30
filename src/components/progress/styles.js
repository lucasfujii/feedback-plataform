
import { makeStyles } from '@material-ui/core/styles';

export const createStyles = () => {

  const createProgressStyles = (theme) => ({
    root: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      height: '100%',
      width: '100%',
      zIndex: '11' 
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(236, 239, 241, 0.6)'
    }
  });

  const classes = makeStyles(createProgressStyles)();
  return classes;
};