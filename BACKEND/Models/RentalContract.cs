using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Models;

public partial class RentalContract
{
    [Key]
    public int ContractId { get; set; }

    public int RoomId { get; set; }

    public int TenantId { get; set; }

    public DateOnly? StartDate { get; set; }

    public DateOnly? EndDate { get; set; }

    [Column(TypeName = "decimal(12, 2)")]
    public decimal? Deposit { get; set; }

    [StringLength(20)]
    [Unicode(false)]
    public string? Status { get; set; }

    [InverseProperty("Contract")]
    public virtual ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();

    [ForeignKey("RoomId")]
    [InverseProperty("RentalContracts")]
    public virtual Room Room { get; set; } = null!;

    [ForeignKey("TenantId")]
    [InverseProperty("RentalContracts")]
    public virtual User Tenant { get; set; } = null!;
}
