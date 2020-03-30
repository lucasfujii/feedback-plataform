import React from 'react';

import MaterialTable from 'material-table';

export default ({ title, columns, data, actions, parentField, filtering = true, search = true, detailPanel, ...otherProps }) => {

  const options = {
    actionsColumnIndex: -1,
    pageSize: 10,
    pageSizeOptions: [25, 50, 100],
    filtering,
    search
  };

  const header = {};

  return (
    <MaterialTable
      title={title || ''}
      columns={columns}
      data={data || []}
      actions={actions}
      options={options}
      header={header}
      detailPanel={detailPanel}
      localization={{
        header: { actions: 'Ações' },
        pagination: {
          labelRowsSelect: 'registro(s)',
        },
        toolbar: {
          searchTooltip: 'Pesquisar',
          searchPlaceholder: 'Pesquisar',
        }
      }}
      {...otherProps}      
    />
  );
};