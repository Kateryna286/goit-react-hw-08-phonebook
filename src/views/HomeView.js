import BookImg from './Book-icon-bible.png';

const styles = {
  text: {
    fontSize: 52,
    marginTop: 60,
    textAlign: 'center',
  },

  img: {
    width: 200,
    marginLeft: 455,
    marginTop: 50,
  },
};

export default function HomeView() {
  return (
    <>
      <img src={BookImg} alt="Book" style={styles.img} />
      <div style={styles.text}>Welcome to ContactsApp!</div>
    </>
  );
}
