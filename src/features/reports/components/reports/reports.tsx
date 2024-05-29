"use client";

import { useEffect, useState } from "react";
import ReportsHeader from "../reports-header/reports-header";
import ReportsTable from "../reports-table/reports-table";
import MockQueryConstants from "@/constants/mock-queries-constants";

function Reports() {
  const [clients, setClients] = useState<Array<any>>();
  const [categories, setCategories] = useState<Array<any>>();
  const [users, setUsers] = useState<Array<any>>();
  const [workEntries, setWorkEntries] = useState<Array<any>>();

  useEffect(() => {
    fetchClients();
    fetchCategories();
    fetchUsers();
    fetchWorkEntriesForReports();
  }, []);

  const fetchClients = () => {
    return fetch(MockQueryConstants.getAllClientsFetchProjects())
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setClients(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const fetchUsers = () => {
    return fetch(MockQueryConstants.getAllUsers())
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setUsers(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const fetchCategories = () => {
    fetch(MockQueryConstants.categories)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setCategories(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const fetchWorkEntriesForReports = (
    startDate?: Date,
    endDate?: Date,
    userId?: string,
    clientId?: string,
    projectId?: string,
    category?: string
  ) => {
    fetch(
      MockQueryConstants.getWorkEntriesForReport(
        startDate,
        endDate,
        userId,
        clientId,
        projectId,
        category
      )
    )
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setWorkEntries(body);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  return (
    <>
      <ReportsHeader
        clients={clients!}
        users={users!}
        categories={categories!}
        fetchWorkEntitiesForReport={fetchWorkEntriesForReports}
      />
      <ReportsTable workEntries={workEntries!} />
    </>
  );
}

export default Reports;
