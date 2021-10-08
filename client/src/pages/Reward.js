const Reward = (props) => {
  const { reward, deleteReward } = props
  return (
    <div style={styles.card}>
      <h1>{reward.name}</h1>
      <p>{reward.description}</p>
      <p>{reward.cost}</p>
      <button onClick={() => deleteReward(reward.id)}>Delete</button>

    </div>
  )
}
const styles = {
  card: {
    border: "1px solid black",
    padding: "8px"
  }

}
export default Reward