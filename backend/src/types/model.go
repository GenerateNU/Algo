package types

import (
	"time"
)

type Model struct {
	ID        uint      `gorm:"primarykey" json:"id" example:"1"`
	CreatedAt time.Time `json:"created_at" example:"2023-09-20T16:34:50Z"`
	UpdatedAt time.Time `json:"updated_at" example:"2023-09-20T16:34:50Z"`
}

type RedirectURLResponse struct {
	RedirectURL string `json:"redirect_url"`
}

type VerifyRequest struct {
	Verifier string `json:"verifier" binding:"required"`
}

type AuthRequest struct {
	Body struct {
		SessionToken string `json:"sessionToken"`
	} `json:"body"`
}

type StatusResponse struct {
	Status string `json:"status"`
}

type AccountListResponse struct {
	AccountListResponse struct {
		Accounts struct {
			AccountList `json:"Account"`
		} `json:"Accounts"`
	} `json:"AccountListResponse"`
}

type AccountList []struct {
	AccountID                  string `json:"accountId"`
	AccountIDKey               string `json:"accountIdKey"`
	AccountMode                string `json:"accountMode"`
	AccountDesc                string `json:"accountDesc"`
	AccountName                string `json:"accountName"`
	AccountType                string `json:"accountType"`
	InstitutionType            string `json:"institutionType"`
	AccountStatus              string `json:"accountStatus"`
	ClosedDate                 int64  `json:"closedDate"`
	ShareWorksAccount          bool   `json:"shareWorksAccount"`
	FCManagedMssbClosedAccount bool   `json:"fcManagedMssbClosedAccount"`
}

type Position struct {
	PositionID        int     `json:"positionId"`
	SymbolDescription string  `json:"symbolDescription"`
	DateAcquired      int64   `json:"dateAcquired"`
	PricePaid         float64 `json:"pricePaid"`
	Commissions       float64 `json:"commissions"`
	OtherFees         float64 `json:"otherFees"`
	Quantity          int     `json:"quantity"`
	PositionIndicator string  `json:"positionIndicator"`
	PositionType      string  `json:"positionType"`
	DaysGain          float64 `json:"daysGain"`
	DaysGainPct       float64 `json:"daysGainPct"`
	MarketValue       float64 `json:"marketValue"`
	TotalCost         float64 `json:"totalCost"`
	TotalGain         float64 `json:"totalGain"`
	TotalGainPct      float64 `json:"totalGainPct"`
	PctOfPortfolio    float64 `json:"pctOfPortfolio"`
	CostPerShare      float64 `json:"costPerShare"`
	TodayCommissions  float64 `json:"todayCommissions"`
	TodayFees         float64 `json:"todayFees"`
	TodayPricePaid    float64 `json:"todayPricePaid"`
	TodayQuantity     float64 `json:"todayQuantity"`
	LotsDetails       string  `json:"lotsDetails"`
	QuoteDetails      string  `json:"quoteDetails"`
	Product           struct {
		Symbol       string `json:"symbol"`
		SecurityType string `json:"securityType"`
		ExpiryYear   int    `json:"expiryYear"`
		ExpiryMonth  int    `json:"expiryMonth"`
		ExpiryDay    int    `json:"expiryDay"`
		StrikePrice  int    `json:"strikePrice"`
		ProductID    struct {
			Symbol string `json:"symbol"`
		} `json:"productId"`
	} `json:"Product"`
	Quick struct {
		LastTrade     float64 `json:"lastTrade"`
		LastTradeTime int64   `json:"lastTradeTime"`
		Change        float64 `json:"change"`
		ChangePct     float64 `json:"changePct"`
		Volume        int     `json:"volume"`
	} `json:"Quick"`
}

type AccountPortfolio struct {
	AccountID    string     `json:"accountId"`
	PositionList []Position `json:"Position"`
	TotalPages   int        `json:"totalPages"`
}

type PortfolioResponse struct {
	PortfolioResponse struct {
		AccountPortfolioList []AccountPortfolio `json:"AccountPortfolio"`
	} `json:"PortfolioResponse"`
}

type TickerInfo struct {
	Type          string
	TickerSymbol  string
	TotalQuantity int
	AverageCost   float64
}

type ClerkWebhookEvent struct {
	Data   map[string]interface{} `json:"data"`
	Object string                 `json:"object"`
	Type   string                 `json:"type"`
}

// Represents a trade order
type Order struct {
	AccountID     string       `json:"accountId"`
	OrderType     string       `json:"orderType"`
	Symbol        string       `json:"Product>symbol"`
	SecurityType  string       `json:"Product>securityType"` // "EQ" for equity, "OPTION"
	Action        string       `json:"orderAction"`          // "BUY", "SELL"
	QuantityType  QuantityType `json:"quantityType"`         // "QUANTITY", "DOLLARS"
	Quantity      int          `json:"quantity"`
	OrderTerm     string       `json:"orderTerm"`     // "GOOD_FOR_DAY", "GOOD_UNTIL_CANCEL"
	MarketSession string       `json:"marketSession"` // "REGULAR", "EXTENDED_HOURS"
	PriceType     string       `json:"priceType"`     // "MARKET", "LIMIT"
	LimitPrice    float64      `json:"limitPrice"`
	StopPrice     float64      `json:"stopPrice"`
	AllOrNone     bool         `json:"allOrNone"`
	ClientOrderID string       `json:"clientOrderId"`
	IsPreview     bool         `json:"isPreview"`
	OrderID       string       `json:"orderId,omitempty"` // Provided by the API after order placement
	Status        string       `json:"status,omitempty"`  // "OPEN", "FILLED", "CANCELLED"
	PlacedTime    time.Time    `json:"placedTime,omitempty"`
}

// QuantityType represents the type of quantity used in an order
type QuantityType string

const (
	QuantityTypeQuantity QuantityType = "QUANTITY"
	QuantityTypeDollars  QuantityType = "DOLLARS"
)

// PreviewOrderRequest represents the structure for previewing an order on E*Trade
type PreviewOrderRequest struct {
	ClientOrderID string       `json:"clientOrderId"`
	Order         []OrderEntry `json:"Order"`
}

// OrderEntry represents a single order entry with the order details
type OrderEntry struct {
	Instrument    []Instrument `json:"Instrument"`
	OrderAction   string       `json:"orderAction"`
	QuantityType  QuantityType `json:"quantityType"`
	Quantity      int          `json:"quantity"`
	OrderTerm     string       `json:"orderTerm"`
	MarketSession string       `json:"marketSession"`
	PriceType     string       `json:"priceType"`
	LimitPrice    float64      `json:"limitPrice,omitempty"`
	StopPrice     float64      `json:"stopPrice,omitempty"`
	AllOrNone     bool         `json:"allOrNone"`
}

// Instrument represents a single financial instrument in an order
type Instrument struct {
	Product      Product      `json:"Product"`
	OrderAction  string       `json:"orderAction"`  // Redundant, but sometimes expected by E*Trade APIs
	QuantityType QuantityType `json:"quantityType"` // Also possibly redundant
	Quantity     int          `json:"quantity"`
}

// Product represents product details like security type and symbol
type Product struct {
	SecurityType string `json:"securityType"`
	Symbol       string `json:"symbol"`
}

type CreateTradePostRequest struct {
	PercentData  float64 `json:"percent_data" binding:"required"`
	TickerSymbol string  `json:"ticker_symbol" binding:"required"`
	Title        string  `json:"title" binding:"required"`
	Description  string  `json:"description" binding:"required"`
}

type CreatePortfolioPostRequest struct {
	PercentData float64 `json:"percent_data" binding:"required"`
	SummaryType string  `json:"summary_type" binding:"required"`
}

type CreateTextPostRequest struct {
	Title       string `json:"title" binding:"required"`
	Description string `json:"description" binding:"required"`
}
