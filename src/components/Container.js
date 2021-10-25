const styles = {
  container: {
    maxWidth: 1170,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
};

export default function Container({ children }) {
  return <div style={styles.container}>{children}</div>;
}
