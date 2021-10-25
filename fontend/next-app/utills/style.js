import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  navbar: {
    backgroundColor: '#4080e2',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: '80vh',
    marginLeft: '200px',
  },

  footer: {
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyle;
