using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Models;

public partial class Invoice
{
    [Key]
    public int InvoiceId { get; set; }

    public int ContractId { get; set; }

    [StringLength(7)]
    [Unicode(false)]
    public string? Month { get; set; }

    [Column(TypeName = "decimal(12, 2)")]
    public decimal? RoomPrice { get; set; }

    [Column(TypeName = "decimal(12, 2)")]
    public decimal? ElectricFee { get; set; }

    [Column(TypeName = "decimal(12, 2)")]
    public decimal? WaterFee { get; set; }

    [Column(TypeName = "decimal(14, 2)")]
    public decimal? TotalAmount { get; set; }

    [StringLength(20)]
    [Unicode(false)]
    public string? Status { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [ForeignKey("ContractId")]
    [InverseProperty("Invoices")]
    public virtual RentalContract Contract { get; set; } = null!;

    [InverseProperty("Invoice")]
    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
}
