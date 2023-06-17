
const FORM_FIELDS = [
  {
    name: 'date',
    label: 'Date',
    isDefault: true,
    type: 'date',
    isEditable: true,
    dependantFields: [
      {
        name: 'timezone',
        label: 'Timezone',
        isDefault: true,
        type: 'boolean',
        isEditable: true,
        choices: [
          { id: 'gmt+5:30', label: 'GMT+5:30' },
          { id: 'utc', label: 'UTC' }
        ]
      }
    ]
  },
  {
    name: 'amount',
    label: 'Amount',
    isDefault: true,
    type: 'integer',
    isEditable: true
  },
  {
    name: 'status',
    label: 'Status',
    isDefault: true,
    type: 'dropdown',
    choices: [
      { id: '1', label: 'Initializing' },
      { id: '2', label: 'Transaction in Progress' },
      { id: '3', label: 'Pending confirmation' },
      { id: '4', label: 'Transaction timed-out' },
      { id: '5', label: 'Transaction completed' },
      { id: '6', label: 'Refund Initiated' }
    ],
    isEditable: true
  },
  {
    name: 'payment_method',
    label: 'Payment Method',
    isDefault: true,
    type: 'dropdown',
    choices: [
      { id: '1', label: 'Net Banking' },
      { id: '2', label: 'UPI' },
      { id: '3', label: 'Cards' }
    ],
    isEditable: true
  }
]

export {
  FORM_FIELDS
}
