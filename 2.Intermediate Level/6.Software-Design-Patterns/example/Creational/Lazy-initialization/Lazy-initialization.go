package main

import (
	"fmt"
	"time"
)

type Database struct {
	connection chan *Database
}

func newDatabase() *Database {
	return &Database{connection: make(chan *Database)}
}

func (db *Database) getConnectionMessage() string {
	return "Database connection established"
}

func (db *Database) getConnection() string {
	return db.getConnectionMessage()
}

func (db *Database) createConnection() {
	time.Sleep(1 * time.Second)
	db.connection <- db
}

func main() {
	db := newDatabase()
	go func() {
		for {
			db.createConnection()
		}
	}()
	for i := 0; i < 2; i++ {
		fmt.Println(db.getConnection())
	}
}
