import { createStore, createEvent, combine } from "effector";

// events
const billChanged = createEvent<string>()
const personsChanged = createEvent<string>()
const tipsChanged = createEvent<string>()
const tipsClicked = createEvent<number>()
const reseted = createEvent()
// stores
const $bill = createStore<string>("")
const $persons = createStore<string>("")
const $tipsInput = createStore<string>("")
const $tipButtons = createStore<{
    list: number[],
    checked: number|null
}>({
    list: [5, 10, 15, 25, 50],
    checked: null
})

$bill
    .on(billChanged, (_, data) => data)
    .on(reseted, () => "")
$persons
    .on(personsChanged, (_, data) => data)
    .on(reseted, () => "")
$tipsInput
    .on(tipsChanged, (_, data) => data)
    .on(tipsClicked, () => "")
    .on(reseted, () => "")
$tipButtons
    .on(tipsClicked, (store, data) => ({
        ...store,
        checked: data
    }))
    .on(tipsChanged, (store) => ({
        ...store,
        checked: null
    }))
    .on(reseted, (store) => ({
        ...store,
        checked: null
    }))

const $result = combine($bill, $persons, $tipsInput, $tipButtons, (bill, persons, tips, buttons) => {
    if (!bill || !persons || !parseInt(persons)) 
        return {
            tip: "0.00",
            total: "0.00"
        }
        
    let tipsTotal = 0;
        
    const b = parseFloat(bill.replace(/[^\d.]/g, ""))
    const p = parseInt(persons)
    
    if (tips && !isNaN(parseInt(tips)))
        tipsTotal = b*parseInt(tips)/100
    if (buttons.checked)
        tipsTotal = b*buttons.checked/100

    return {
        tip: (tipsTotal/p).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " "),
        total: ((b+tipsTotal)/p).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
})

export {
    $bill, $persons, $tipsInput, $tipButtons,
    billChanged, personsChanged, tipsChanged, tipsClicked,
    $result,
    reseted
}