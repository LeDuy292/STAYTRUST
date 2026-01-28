using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Models;

public partial class Room
{
    [Key]
    public int RoomId { get; set; }

    public int LandlordId { get; set; }

    [StringLength(200)]
    public string? Title { get; set; }

    public string? Description { get; set; }

    [Column(TypeName = "decimal(12, 2)")]
    public decimal Price { get; set; }

    public double? Area { get; set; }

    [StringLength(255)]
    public string? Address { get; set; }

    [StringLength(20)]
    [Unicode(false)]
    public string? Status { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [ForeignKey("LandlordId")]
    [InverseProperty("Rooms")]
    public virtual User Landlord { get; set; } = null!;

    [InverseProperty("Room")]
    public virtual ICollection<MeterReading> MeterReadings { get; set; } = new List<MeterReading>();

    [InverseProperty("Room")]
    public virtual ICollection<RentalContract> RentalContracts { get; set; } = new List<RentalContract>();

    [InverseProperty("Room")]
    public virtual ICollection<RoomImage> RoomImages { get; set; } = new List<RoomImage>();
}
