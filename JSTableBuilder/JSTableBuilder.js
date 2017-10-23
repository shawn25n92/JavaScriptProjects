function UDTable(Tid, Tname, Tclass, Tstyle) {
    this.Tid = Tid;
    this.Tname = Tname;
    this.Tclass = Tclass;
    this.Tstyle = Tstyle;
    this.UDTableHeadCollection = [];
    this.UDTableBodyCollection = [];
    this.AddUDTableHead = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.UDTableHeadCollection.push(arguments[i])
        }
    }
    this.AddUDTableBody = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.UDTableBodyCollection.push(arguments[i])
        }
    }
    this.Render = function (display_location_selector, selector_type) {
        var display_location;
        // render the table first
        var table_main = document.createElement("table");
        table_main.id = this.Tid != null ? this.Tid : "";
        if (this.Tname != null) {
            table_main.setAttribute("name", this.Tname);
        }
        if (this.Tclass != null) {
            table_main.setAttribute("class", this.Tclass);
        }
        if (this.Tstyle != null) {
            table_main.setAttribute("style", this.Tstyle);
        }
        if (this.UDTableHeadCollection.length > 0) {
            for (var i = 0; i < this.UDTableHeadCollection.length; i++) {
                var table_head = document.createElement("thead");
                
                if (this.UDTableHeadCollection[i].UDTableRowCollection.length > 0) {
                    for (var j = 0; j < this.UDTableHeadCollection[i].UDTableRowCollection.length; j++) {
                        var table_head_row = document.createElement("tr");
                        for (var k = 0; k < this.UDTableHeadCollection[i].UDTableRowCollection[j].UDTableColumnCollection.length; k++) {
                            var table_head_row_column = document.createElement("td");
                            var current_column = this.UDTableHeadCollection[i].UDTableRowCollection[j].UDTableColumnCollection[k];
                            table_head_row_column.innerHTML = current_column.TDcontent;
                            if (current_column.TDclass != null) {
                                table_head_row_column.setAttribute("class", current_column.TDclass);
                            }
                            if (current_column.TDid != null) {
                                table_head_row_column.setAttribute("id", current_column.TDid);
                            }
                            if (current_column.TDname != null) {
                                table_head_row_column.setAttribute("name", current_column.TDname);
                            }
                            if (current_column.TDstyle != null) {
                                table_head_row_column.setAttribute("style", current_column.TDstyle);
                            }
                            table_head_row.appendChild(table_head_row_column);
                        }
                        table_head.appendChild(table_head_row);
                    }
                }
                table_main.appendChild(table_head);
            }
        }

        if (display_location_selector != null && selector_type != null) {
            if (selector_type == "id") {
                display_location = document.getElementById(display_location_selector);
            }
            else if (selector_type == "class") {
                display_location = document.getElementsByClassName(display_location_selector);
            }
            else if (selector_type == "name") {
                display_location = document.getElementsByName(display_location_selector);
            }
        }
        else {
            // assume that display_location is a DOM node and append the table to the inner html
            document.body.appendChild(table_main);
        }
    }
    return this;
}
function UDTableHead(THid, THname, THclass, THstyle) {
    this.THid = THid;
    this.THname = THname;
    this.THclass = THclass;
    this.THstyle = THstyle;
    this.UDTableRowCollection = [];
    this.AddUDTableRow = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.UDTableRowCollection.push(arguments[i]);
        }
        return this;
    }
    return this;
}
function UDTableBody(TBid, TBname, TBclass, TBstyle) {
    this.TBid = TBid;
    this.TBname = TBname;
    this.TBclass = TBclass;
    this.TBstyle = TBstyle;
    this.UDTableRowCollection = [];
    this.AddUDTableRow = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.UDTableRowCollection.push(arguments[i]);
        }
        return this;
    }
    return this;
}
function UDTableRow(TRid, TRname, TRclass, TRstyle) {
    this.TRid = TRid;
    this.TRname = TRname;
    this.TRclass = TRclass;
    this.TRstyle = TRstyle;
    this.UDTableColumnCollection = [];
    this.AddUDTableColumn = function () {
        for (var i = 0; i < arguments.length; i++) {
            this.UDTableColumnCollection.push(arguments[i]);
        }
        return this;
    }
    return this;
}
function UDTableColumn(TDid, TDname, TDclass, TDstyle, TDcontent) {
    this.TDid = TDid;
    this.TDname = TDname;
    this.TDclass = TDclass;
    this.TDstyle = TDstyle;
    this.TDcontent = TDcontent;
    return this;
}