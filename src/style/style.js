const style = {
  agencyBox: {
    width:'80vw',
    margin:'0 auto',
    fontFamily:'Roboto'
  },
  title: {
    textAlign:'center',
    textTransform:'uppercase'
  },
  agencyList: {
    border:'1px solid #f1f1f1',
    padding:'0 12px',
    maxHeight:'70vh',
    overflow:'scroll'
  },
  agency: {
    backgroundColor:'#fafafa',
    margin:'10px',
    padding:'3px 10px',
    fontSize:'1.5rem'
  },
  agencyForm: {
    margin:'10px',
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'space-between'
  },
  agencyFormFields: {
    minWidth:'150px',
    margin:'3px',
    padding:'0 10px',
    borderRadius:'3px',
    height:'40px',
    flex:'2'
  },
  // commentFormText: {
  //   flex:'4',
  //   minWidth:'400px',
  //   margin:'3px',
  //   padding:'0 10px',
  //   height:'40px',
  //   borderRadius:'3px'
  // },
  formPost: {
    minWidth:'100px',
    flex:'1',
    height:'40px',
    margin:'5px 3px',
    fontSize:'1rem',
    backgroundColor:'#275a94',
    borderRadius:'3px',
    color:'#fff',
    textTransform:'uppercase',
    letterSpacing:'.055rem',
    border:'none'
  },
  updateLink: {
    textDecoration:'none',
    paddingRight:'15px',
    fontSize:'.7rem'
  },
  deleteLink: {
    textDecoration:'none',
    paddingRight:'15px',
    fontSize:'.7rem',
    color:'red'
  },
  headers: {
    textAlign:'center',
    minWidth:'150px'
  }
}

module.exports = style;