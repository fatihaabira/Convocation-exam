import React from "react";
import { Card, Badge } from "reactstrap";
import { DataTableHead, DataTableRow, DataTableItem, UserAvatar } from "../../../Component";
import { recentOrderData } from "./OrderData";

const RecentOrders = () => {
  return (
    <Card className="card-full">
      <div className="card-inner">
        <div className="card-title-group">
          <div className="card-title">
            <h6 className="title">Members</h6>
          </div>
        </div>
      </div>
      <div className="nk-tb-list mt-n2">
        <DataTableHead>
          <DataTableRow>
            <span>Student No.</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Student Name</span>
          </DataTableRow>
          <DataTableRow size="md">
            <span>Last Seen</span>
          </DataTableRow>
          <DataTableRow>
            <span className="d-none d-sm-inline">Status</span>
          </DataTableRow>
        </DataTableHead>
        {recentOrderData.map((item, idx) => (
          <DataTableItem key={idx}>
            <DataTableRow>
              <span className="tb-lead">
                <a href="#order" onClick={(ev) => ev.preventDefault()}>
                  {item.order}
                </a>
              </span>
            </DataTableRow>
            <DataTableRow size="sm">
              <div className="user-card">
                <UserAvatar className="sm" theme={item.theme} text={item.initial} image={item.img}></UserAvatar>
                <div className="user-name">
                  <span className="tb-lead">{item.name}</span>
                </div>
              </div>
            </DataTableRow>
            <DataTableRow size="md">
              <span className="tb-sub">{item.date}</span>
            </DataTableRow>
            
            <DataTableRow>
              <Badge
                className="badge-dot badge-dot-xs"
                color={
                  item.status === "Available" ? "success" : item.status === "Away" ? "warning" : "danger"
                }
              >
                {item.status}
              </Badge>
            </DataTableRow>
          </DataTableItem>
        ))}
      </div>
    </Card>
  );
};
export default RecentOrders;
