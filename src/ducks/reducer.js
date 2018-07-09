const initialState = {
  loanType: "Home Purchase",
  propertyType: "Single Family Home",
  city: "",
  propToBeUsedOn: "",
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: "",
  history: "",
  addressOne: "",
  addressTwo: "",
  addressThree: "",
  firstName: "",
  lastName: "",
  email: ""
};

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_AGENT = "UPDATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADDONE = "UPDATE_ADDONE";
const UPDATE_ADDTWO = "UPDATE_ADDTWO";
const UPDATE_ADDTHREE = "UPDATE_ADDTHREE";
const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
const UPDATE_LASTNAME = "UPDATE_LASTNAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return Object.assign({}, state, { loantype: action.payload });
    case UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, { property: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_PROP:
      return Object.assign({}, state, { propToBeUsedOn: action.payload });
    case UPDATE_FOUND:
      return Object.assign({}, state, { found: action.payload });
    case UPDATE_AGENT:
      return Object.assign({}, state, { agent: action.payload });
    case UPDATE_COST:
      return Object.assign({}, state, { cost: action.payload });
    case UPDATE_DOWNPAYMENT:
      return Object.assign({}, state, { downpayment: action.payload });
    case UPDATE_CREDIT:
      return Object.assign({}, state, { credit: action.payload });
    case UPDATE_HISTORY:
      return Object.assign({}, state, { history: action.payload });
    case UPDATE_ADDONE:
      return Object.assign({}, state, { addone: action.payload });
    case UPDATE_ADDTWO:
      return Object.assign({}, state, { addtwo: action.payload });
    case UPDATE_ADDTHREE:
      return Object.assign({}, state, { addthree: action.payload });
    case UPDATE_FIRSTNAME:
      return Object.assign({}, state, { firstname: action.payload });
    case UPDATE_LASTNAME:
      return Object.assign({}, state, { lastname: action.payload });
    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.payload });
    default:
      return state;
  }
}

export function updateLoan(loantype) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loantype
  };
}
export function updateProperty(property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  };
}
export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  };
}
export function updateAgent(agent) {
  return {
    type: UPDATE_FOUND,
    payload: agent
  };
}
export function updateCost(cost) {
  return {
    type: UPDATE_FOUND,
    payload: cost
  };
}
export function updateDownPayment(downpayment) {
  return {
    type: UPDATE_DOWNPAYMENT,
    payload: downpayment
  };
}
export function updateCredit(credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  };
}
export function updateHistory(history) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  };
}
export function updateAddOne(addone) {
  return {
    type: UPDATE_ADDONE,
    payload: addone
  };
}
export function updateAddTwo(addtwo) {
  return {
    type: UPDATE_ADDTWO,
    payload: addtwo
  };
}
export function updateAddThree(addthree) {
  return {
    type: UPDATE_ADDTHREE,
    payload: addthree
  };
}
export function updateFirstName(firstname) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: firstname
  };
}
export function updateLastName(lastName) {
  return {
    type: UPDATE_LASTNAME,
    payload: lastName
  };
}
export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}
export default reducer;
