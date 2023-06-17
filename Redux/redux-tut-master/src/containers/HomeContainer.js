import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>
    {console.log("222 HomeContainergetsTriggered");dispatch(addToCart(data))}

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;