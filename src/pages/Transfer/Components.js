import DataTable from 'react-data-table-component';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  UncontrolledDropdown,
} from 'reactstrap';

const TransactionsTable = () => {
  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Date</span>,
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Type</span>,
      sortable: true,
      selector: (cell) => {
        switch (cell.type) {
          case 'Credit':
            return (
              <span className="badge badge-soft-success text-uppercase">
                {' '}
                {cell.type}{' '}
              </span>
            );
          case 'Debit':
            return (
              <span className="badge badge-soft-danger text-uppercase">
                {' '}
                {cell.type}{' '}
              </span>
            );
          default:
            return (
              <span className="badge badge-soft-info text-uppercase">
                {' '}
                {cell.type}{' '}
              </span>
            );
        }
      },
    },
    {
      name: <span className="font-weight-bold fs-13">Amount</span>,
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Balance Before</span>,
      selector: (row) => row.balance_before,
      sortable: false,
    },
    {
      name: <span className="font-weight-bold fs-13">Balance After</span>,
      selector: (row) => row.balance_after,
      sortable: false,
    },
    {
      name: <span className="font-weight-bold fs-13">Sub Type</span>,
      sortable: true,
      selector: (cell) => (
        <span className="badge badge-soft-info text-uppercase">
          {' '}
          {cell.sub_type}{' '}
        </span>
      ),
    },
    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,
      cell: () => {
        return (
          <UncontrolledDropdown className="dropdown d-inline-block">
            <DropdownToggle
              className="btn btn-soft-secondary btn-sm"
              tag="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem href="#">
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>View
                Transaction
              </DropdownItem>
              <DropdownItem className="edit-item-btn">
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                Report Transaction
              </DropdownItem>
              {/* <DropdownItem className='remove-item-btn'> <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete </DropdownItem> */}
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },
  ];

  const data = [
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Credit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Internal',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Electricity',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Airtime',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Airtime',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Internal',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'External',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Airtime',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Credit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Internal',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Airtime',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Airtime',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Airtime',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Airtime',
    },
    {
      date: '20 Apr, 2023 11:08 AM',
      type: 'Debit',
      amount: '10,000',
      balance_before: '10,000',
      balance_after: '10,000',
      sub_type: 'Airtime',
    },
  ];
  return <DataTable columns={columns} data={data} pagination />;
};

export { TransactionsTable };
