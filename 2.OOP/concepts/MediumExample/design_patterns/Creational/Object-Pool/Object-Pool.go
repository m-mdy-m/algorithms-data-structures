package main

import (
	"fmt"
)

type Connection struct{}

func NewConnection() *Connection {
	fmt.Println("Creating a new connection...")
	return &Connection{}
}

func (c *Connection) Connect() {
	fmt.Println("Connected!")
}

type ConnectionPool struct {
	pool    []*Connection
	maxSize int
}

func NewConnectionPool(maxSize int) *ConnectionPool {
	return &ConnectionPool{
		pool:    make([]*Connection, 0),
		maxSize: maxSize,
	}
}

func (cp *ConnectionPool) GetConnection() *Connection {
	if len(cp.pool) >= cp.maxSize {
		panic("Maximum pool size reached")
	}

	if len(cp.pool) > 0 {
		connection := cp.pool[len(cp.pool)-1]
		cp.pool = cp.pool[:len(cp.pool)-1]
		fmt.Println("Obtained connection from pool")
		return connection
	}

	connection := NewConnection()
	return connection
}

func (cp *ConnectionPool) ReleaseConnection(connection *Connection) {
	fmt.Println("Releasing connection back to pool")
	cp.pool = append(cp.pool, connection)
}

func main() {
	pool := NewConnectionPool(2)

	connection1 := pool.GetConnection()
	connection1.Connect()
	pool.ReleaseConnection(connection1)

	connection2 := pool.GetConnection()
	connection2.Connect()
	pool.ReleaseConnection(connection2)

	connection3 := pool.GetConnection()
	connection3.Connect()
	pool.ReleaseConnection(connection3)

	connection4 := pool.GetConnection()
	connection4.Connect()
	pool.ReleaseConnection(connection4)
}
