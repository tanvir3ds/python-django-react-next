import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  navbar: {
    backgroundColor: '#8E44AD',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    // justifyItems: 'space-between',
    height: 50,

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

  footer: {
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyle;
