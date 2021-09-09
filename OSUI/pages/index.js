import cx from '../styles/Home.less'
import Button from '@osui/button';
import Tooltip from '@osui/tooltip';
import Table from '@osui/table';

// import {Button, Tooltip, Table} from '@osui/ui';

export default function Home() {
  return (
    <div className={cx('red')}>
      <Tooltip title="222">
        <Button type="primary">aaa</Button>
      </Tooltip>
      <Table />
    </div>
  )
}
